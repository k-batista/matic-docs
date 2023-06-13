#!/bin/bash

echo " "
echo -n "Enter the deployment name given in the marketplace deployment form: "
read DEP_NAME

DEP_LIST=$(gcloud deployment-manager deployments list --simple-list)

for EACH_DEP in `echo "$DEP_LIST"`           # For loop starts here
do
   if [ "$EACH_DEP" == "$DEP_NAME" ];        # If condition to check if the given deployment exists starts here
   then
      echo " "
      echo -n "Do you want to create or destroy the resources? (Type create or destroy): "
      read CHOICE

      if [ "$CHOICE" == "create" ];          # Nested If-else condition to check choice starts here
      then
         echo " "
         echo -n "Do you have a domain? - (type yes or no): "
         read DOMAIN_BOOL
         if [ "$DOMAIN_BOOL" == "no" -o "$DOMAIN_BOOL" == "yes" ];      # If condition to check if the user passed yes or no to domain starts here
         then
            if [ "$DOMAIN_BOOL" == "no" ];
            then
               echo " "
               echo "Buy a domain and run the script again. Exiting the script now..."
               echo " "
               exit 0 
            else
               echo " "
               echo -n "what is your domain name? This name will be used to create Managed Zone if you don't have one yet.: "
               read DOMAIN_NAME
               echo " "
               echo -n "Do you have an existing SSL certificate? - (type yes or no): "
               read SSL_BOOL
               if [ "$SSL_BOOL" == "yes" -o "$SSL_BOOL" == "no" ];      # If condition to check if the user passed yes or no to SSL certificate starts here
               then
                  if [ "$SSL_BOOL" == "yes" ];
                  then
                     echo " "
                     echo -n "Is the certificate created within gcp? - (type yes or no): "
                     read SSL_IN_GCP_BOOL
                     if [ "$SSL_IN_GCP_BOOL" == "yes" -o "$SSL_IN_GCP_BOOL" == "no" ];    # If condition to check if the user passed yes or no to GCP SSL certificate starts here
                     then
                        if [ "$SSL_IN_GCP_BOOL" == "yes" ];
                        then
                           echo " "
                           echo -n "Provide the name of the certificate: "
                           read SSL_CERT_NAME
                        else
                           echo " "
                           echo -n "Do you have the certificate pem file and private key file? - (type yes or no): "
                           read CERT_FILES_BOOL
                           if [ "$SSL_IN_GCP_BOOL" == "yes" -o "$SSL_IN_GCP_BOOL" == "no" ];   # If condition to check if the user passed yes or no to 3rd party SSL certificate starts here
                           then
                              if [ "$CERT_FILES_BOOL" == "yes" ];
                              then
                                 echo " "
                                 echo -n "Give certificate pem file absolute path: "
                                 read CERT_PEM_FILE
                                 echo " "
                                 echo -n "Give certificate private key absolute path: "
                                 read CERT_PRIVATE_KEY
                                 SSL_CERT_NAME="$DEP_NAME"-edge-ssl-certificate
                                 gcloud compute ssl-certificates create "$SSL_CERT_NAME" --certificate="$CERT_PEM_FILE" --private-key="$CERT_PRIVATE_KEY"
                              else
                                 echo " "
                                 echo -n "you should either create a certificate within gcp or get it from other third party ways"
                                 exit 0
                              fi
                           else                                     # If condition to check if the user passed yes or no to 3rd party SSL certificate ends here
                              echo " "
                              echo -n "Invalid input. Exiting the script..."
                           fi
                        fi
                     else                                            # If condition to check if the user passed yes or no to GCP SSL certificate ends here
                        echo " "
                        echo -n "Invalid input. Exiting the script..."
                     fi
                  else
                     echo " "
                     echo "Lets start with creating a new SSL certificate within GCP"
                     SSL_CERT_NAME="$DEP_NAME"-edge-ssl-certificate
                     echo " "
                     echo -n "Provide a domain or subdomain for which you want to create the certificate. Kindly don't give wildcard(*.example.com).GCP doesn't support it. Ex: example.com or www.example.com etc : "
                     read DOMAIN_SUBDOMAINS_LIST
                     gcloud compute ssl-certificates create "$SSL_CERT_NAME" --domains="$DOMAIN_SUBDOMAINS_LIST" --global
                  fi
              else                                   # If condition to check if the user passed yes or no to SSL certificate ends here
                echo " "
                echo "Invalid input. Exiting the script..."
                exit 1
              fi
            fi
        else                                          # If condition to check if the user passed yes or no to domain ends here
           echo " "
           echo "Invalid input. Exiting the script..."
           exit 1
        fi

         create_neg()
         {
            NODE=$1
            NODE_ZONE=$2
            NODE_NETWORK=$3
            NODE_SUBNETWORK=$4
            gcloud compute network-endpoint-groups create "$NODE"-neg --default-port=8545 --network="$NODE_NETWORK" --network-endpoint-type=GCE_VM_IP_PORT --subnet="$NODE_SUBNETWORK" --zone="$NODE_ZONE"
         }

         add_vm_to_neg()
         {
            NODE=$1
            NODE_IP=$2
            NODE_ZONE=$3
            gcloud compute network-endpoint-groups update "$NODE"-neg --add-endpoint=instance="$NODE",ip="$NODE_IP",port=8545 --zone="$NODE_ZONE"
         }

         NODE1="$DEP_NAME"-node1-vm-0

         NODE1_ZONE=$(gcloud compute instances list --filter="name=$NODE1" --format "get(zone)" | awk -F/ '{print $NF}')
         NODE1_IP=$(gcloud compute instances describe "$NODE1" --zone="$NODE1_ZONE" --format="value(networkInterfaces[0].networkIP)")

         NODE1_NETWORK=$(gcloud compute instances describe "$NODE1" --zone="$NODE1_ZONE" --format="value(networkInterfaces[0].network)" | awk -F/ '{print $NF}')

         NODE1_SUBNETWORK=$(gcloud compute instances describe "$NODE1" --zone="$NODE1_ZONE" --format="value(networkInterfaces[0].subnetwork)" | awk -F/ '{print $NF}')

         create_neg "$NODE1" "$NODE1_ZONE" "$NODE1_NETWORK" "$NODE1_SUBNETWORK"

         add_vm_to_neg "$NODE1" "$NODE1_IP" "$NODE1_ZONE"

         NODE2="$DEP_NAME"-node2-vm-0

         NODE2_ZONE=$(gcloud compute instances list --filter="name=$NODE2" --format "get(zone)" | awk -F/ '{print $NF}')

         NODE2_IP=$(gcloud compute instances describe "$NODE2" --zone="$NODE2_ZONE" --format="value(networkInterfaces[0].networkIP)")

         NODE2_NETWORK=$(gcloud compute instances describe "$NODE2" --zone="$NODE2_ZONE" --format="value(networkInterfaces[0].network)" | awk -F/ '{print $NF}')

         NODE2_SUBNETWORK=$(gcloud compute instances describe "$NODE2" --zone="$NODE2_ZONE" --format="value(networkInterfaces[0].subnetwork)" | awk -F/ '{print $NF}')

         create_neg "$NODE2" "$NODE2_ZONE" "$NODE2_NETWORK" "$NODE2_SUBNETWORK"

         add_vm_to_neg "$NODE2" "$NODE2_IP" "$NODE2_ZONE"

         NODE3="$DEP_NAME"-node3-vm-0

         NODE3_ZONE=$(gcloud compute instances list --filter="name=$NODE3" --format "get(zone)" | awk -F/ '{print $NF}')

         NODE3_IP=$(gcloud compute instances describe "$NODE3" --zone="$NODE3_ZONE" --format="value(networkInterfaces[0].networkIP)")

         NODE3_NETWORK=$(gcloud compute instances describe "$NODE3" --zone="$NODE3_ZONE" --format="value(networkInterfaces[0].network)" | awk -F/ '{print $NF}')

         NODE3_SUBNETWORK=$(gcloud compute instances describe "$NODE3" --zone="$NODE3_ZONE" --format="value(networkInterfaces[0].subnetwork)" | awk -F/ '{print $NF}')

         create_neg "$NODE3" "$NODE3_ZONE" "$NODE3_NETWORK" "$NODE3_SUBNETWORK"

         add_vm_to_neg "$NODE3" "$NODE3_IP" "$NODE3_ZONE"


         NODE4="$DEP_NAME"-node4-vm-0

         NODE4_ZONE=$(gcloud compute instances list --filter="name=$NODE4" --format "get(zone)" | awk -F/ '{print $NF}')

         NODE4_IP=$(gcloud compute instances describe "$NODE4" --zone="$NODE4_ZONE" --format="value(networkInterfaces[0].networkIP)")

         NODE4_NETWORK=$(gcloud compute instances describe "$NODE4" --zone="$NODE4_ZONE" --format="value(networkInterfaces[0].network)" | awk -F/ '{print $NF}')

         NODE4_SUBNETWORK=$(gcloud compute instances describe "$NODE4" --zone="$NODE4_ZONE" --format="value(networkInterfaces[0].subnetwork)" | awk -F/ '{print $NF}')

         create_neg "$NODE4" "$NODE4_ZONE" "$NODE4_NETWORK" "$NODE4_SUBNETWORK"

         add_vm_to_neg "$NODE4" "$NODE4_IP" "$NODE4_ZONE"

         # Load Balancer Creation

         add_backends_to_backend_service()
         {
            DEP_NAME=$1
            NODE=$2
            NODE_ZONE=$3
            gcloud compute backend-services add-backend "$DEP_NAME"-backend-service --network-endpoint-group="$NODE"-neg --balancing-mode=RATE --capacity-scaler=1.0 --max-rate-per-endpoint=10000.0 --network-endpoint-group-zone="$NODE_ZONE" --global
         }

         gcloud compute health-checks create http "$DEP_NAME"-healthcheck --port 8545 --port-name json-rpc

         gcloud compute backend-services create "$DEP_NAME"-backend-service --global --load-balancing-scheme=EXTERNAL --protocol=HTTP --global-health-checks --health-checks="$DEP_NAME"-healthcheck

         add_backends_to_backend_service "$DEP_NAME" "$NODE1" "$NODE1_ZONE"

         add_backends_to_backend_service "$DEP_NAME" "$NODE2" "$NODE2_ZONE"

         add_backends_to_backend_service "$DEP_NAME" "$NODE3" "$NODE3_ZONE"

         add_backends_to_backend_service "$DEP_NAME" "$NODE4" "$NODE4_ZONE"

         gcloud compute url-maps create "$DEP_NAME"-loadbalancer --default-service="$DEP_NAME"-backend-service --global

         gcloud compute target-https-proxies create "$DEP_NAME"-target-https-proxy --url-map="$DEP_NAME"-loadbalancer --global --global-url-map --ssl-certificates="$SSL_CERT_NAME" --global-ssl-certificates

         gcloud compute forwarding-rules create "$DEP_NAME"-lb-frontend --ports=443 --network-tier=PREMIUM --ip-protocol=TCP --ip-version=IPV4 --target-https-proxy="$DEP_NAME"-target-https-proxy --global

         echo " "

         echo -n "Do you have a managed zone created in this GCP project for the domain $DOMAIN_NAME ? - (type yes or no): "
         read MANAGED_ZONE_EXISTS_BOOL

         if [ "$MANAGED_ZONE_EXISTS_BOOL" == "yes" ];
         then
            echo " "
            echo -n "Provide your zone name: " 
            read ZONE_NAME

            DNSNAME=$(gcloud dns managed-zones describe "$ZONE_NAME" --format "get(dnsName)")
         else
            echo " "
            echo -n "Give a name to your managed zone to create it. NOTE: Zone name must begin with a letter, end with a letter or digit and only contain lowercase letters, digits or dashes. Example: example-zone-name: "
            read ZONE_NAME

            gcloud dns managed-zones create "$ZONE_NAME" --dns-name="$DOMAIN_NAME" --description="Managed zone for polygon edge"

            DNSNAME=$(gcloud dns managed-zones describe "$ZONE_NAME" --format "get(dnsName)")
         fi

         LB_IP=$(gcloud compute forwarding-rules describe "$DEP_NAME"-lb-frontend --global --format "get(IPAddress)")
         echo " "
         echo -n "Enter the subdomain name that you want to create the record set to reach LoadBalancer. Ex: www,about,register etc. Press Enter if you want to skip subdomain and go with only domain. : "
         read SUBDOMAIN

         if [ -n "$SUBDOMAIN" ];
         then
            DNSNAME="$SUBDOMAIN"."$DNSNAME"
         fi

         gcloud dns record-sets create "$DNSNAME" --zone="$ZONE_NAME" --type="A" --ttl="300" --rrdatas="$LB_IP"


      elif [ "$CHOICE" == "destroy" ];          # Nested If-else condition to check choice continues here
         then
            delete_loadbalancer()
            {
               gcloud compute forwarding-rules delete "$DEP_NAME"-lb-frontend --global --quiet

               gcloud compute target-https-proxies delete "$DEP_NAME"-target-https-proxy --global --quiet

               gcloud compute url-maps delete "$DEP_NAME"-loadbalancer --global --quiet

               gcloud compute backend-services delete "$DEP_NAME"-backend-service --global --quiet

               gcloud compute health-checks delete "$DEP_NAME"-healthcheck --global --quiet

               delete_neg()
                 {
                    NODE=$1
                    NODE_ZONE=$2
                    gcloud compute network-endpoint-groups delete "$NODE"-neg --zone="$NODE_ZONE" --quiet
                 }

               NODE1="$DEP_NAME"-node1-vm-0

               NODE1_ZONE=$(gcloud compute instances list --filter="name=$NODE1" --format "get(zone)" | awk -F/ '{print $NF}')
              
               delete_neg "$NODE1" "$NODE1_ZONE"

               NODE2="$DEP_NAME"-node2-vm-0

               NODE2_ZONE=$(gcloud compute instances list --filter="name=$NODE2" --format "get(zone)" | awk -F/ '{print $NF}')

               delete_neg "$NODE2" "$NODE2_ZONE"

               NODE3="$DEP_NAME"-node3-vm-0

               NODE3_ZONE=$(gcloud compute instances list --filter="name=$NODE3" --format "get(zone)" | awk -F/ '{print $NF}')

               delete_neg "$NODE3" "$NODE3_ZONE"

               NODE4="$DEP_NAME"-node4-vm-0

               NODE4_ZONE=$(gcloud compute instances list --filter="name=$NODE4" --format "get(zone)" | awk -F/ '{print $NF}')

               delete_neg "$NODE4" "$NODE4_ZONE"

               if [ "$1" -eq 5 ];
               then
                  delete_ssl_certificate "$1"
               fi
            }

            delete_ssl_certificate()
            {
               echo " "
               gcloud compute ssl-certificates list
               echo " "
               echo -n "From the above listed certificates, Enter the certificate name that you want to delete: "
               read SSL_CERT_NAME
               gcloud compute ssl-certificates delete "$SSL_CERT_NAME" --quiet

               if [ "$1" -eq 5 ];
               then
                  delete_dns_record_set "$1"
               fi
            }

            delete_dns_record_set()
            {
               gcloud dns managed-zones list
               echo " "
               echo -n "Enter the name of the managed zone from the above list whose record sets you want to view: "
               read MANAGED_ZONE_NAME
               gcloud dns record-sets list --zone="$MANAGED_ZONE_NAME"
               echo " "
               echo -n "Note that Record Type 'NS' and 'SOA' cannot be deleted. Enter the record set name to be deleted including dot(.) : "
               read RECORD_SET_NAME
               gcloud dns record-sets delete "$RECORD_SET_NAME" --type=A --zone="$MANAGED_ZONE_NAME" --quiet
               if [ "$1" -eq 4  -o  "$1" -eq 5 ];
               then
                  delete_dns_managed_zone "$MANAGED_ZONE_NAME"
               fi
            }

            delete_dns_managed_zone()
            {
               MANAGED_ZONE_NAME=$1
               gcloud dns managed-zones delete "$MANAGED_ZONE_NAME" --quiet
            }

            echo -n "Chose what do you want to destroy from the below"
            echo " "
            echo -e "1. LoadBalancer \n2. SSL Certificate \n3. DNS Record Set \n4. DNS Record Set & Managed Zone \n5. All of the above"
            echo -n "Enter your choice here: "
            read DESTROY_CHOICE
            case "$DESTROY_CHOICE" in
               1) delete_loadbalancer "$DESTROY_CHOICE"  #When this function is called, it deletes all load balancer components and NEG's
                  ;;

               2) delete_ssl_certificate "$DESTROY_CHOICE" #When this function is called, it deletes only the SSL certificate
                  ;;

               3) delete_dns_record_set "$DESTROY_CHOICE"  #When this function is called, it deletes only the record set
                  ;;

               4) delete_dns_record_set "$DESTROY_CHOICE"  #When this function is called, it deletes both the record set and the managed zone.
                  ;;

               5) delete_loadbalancer "$DESTROY_CHOICE"  #When this function is called, it deletes Loadbalancer, SSL, DNS record set and managed zone.
                  ;;

               *) echo " "
                  echo "Invalid choice. Exiting the script..."
                  echo " "
                  exit 1
                  ;;
            esac
      else                                      # Nested If-else condition to check choice ends here
         echo " "
         echo "Invalid Choice. Exiting the script..."
         echo " "
      fi
   else                                         # If condition to check if the given deployment exists ends here
      echo " "
      echo "The given deployment is not found. Exiting the script now. Give the correct name and re-run the script again. "
      echo " "
      exit 1
   fi
done           # For loop ends here