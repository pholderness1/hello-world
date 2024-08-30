Service Provider is sending a SAML LogOut Request to NAM. 
After logging out NAM needs to sends the SAML LogOut Response to Service Provider. 
To send this response NAM checks the metadata and acquire the SLO URL of Service Provider. 
If there is no SLO configured NAM will complain "end point not configured."
