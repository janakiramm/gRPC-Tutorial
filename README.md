# gRPC Tutorial

For a detailed walkthrough, please read the tutorial at [The New Stack](http://thenewstack.io)

* Clone this repo and run the following command to setup and configure gRPC

```
git clone https://github.com/janakiramm/gRPC-Tutorial

````

* Install gRPC Tools for Python and Node.js

```
sh ./setup.sh

````

* Generate the Stub from .Proto file in the Proto directory and copy it to the Server and Client directories

```
sh ./Gen_Stub.sh

````


* Run the Calculator service available in the Server directory

```
python Calc_Server.py

````

* Run the Python Calculator client available in the Client/Python directory

```
python Calc_Client.py

````

* Run the Node.js Calculator client available in the Client/Node directory

```
node Calc_Client.js

````
