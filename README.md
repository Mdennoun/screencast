Create certificate : https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node

Security folder :

1. Create file `req.cnf` with
   [req]
   distinguished_name = req_distinguished_name
   x509_extensions = v3_req
   prompt = no
   [req_distinguished_name]
   C = FR
   ST = State
   L = Location
   O = Organization Name
   OU = Organizational Unit
   CN = www.localhost.com
   [v3_req]
   keyUsage = critical, digitalSignature, keyAgreement
   extendedKeyUsage = serverAuth
   subjectAltName = @alt_names
   [alt_names]
   DNS.1 = www.localhost.com
   DNS.2 = localhost.com
   DNS.3 = localhost

2. Execute
   `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.pem -config req.cnf -sha256`
