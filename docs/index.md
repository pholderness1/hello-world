# You made it to Pages
Now do something more

#Random
Add otherName SAN option to CSR via command line for versions of openssl < 1.1
```openssl req -x509 -nodes -newkey rsa:2048 -days 3650 -sha256 -keyout test.key -out test.cert -reqexts SAN -extensions SAN -subj '/CN=test.example.com' -config <(cat /etc/pki/tls/openssl.cnf; printf "[SAN]\nsubjectAltName=DNS:test.example.com,otheName:1.2.3.4;UTF8:sample text")```
Additional details available via https://docs.openssl.org/3.0/man5/x509v3_config/#subject-alternative-name
