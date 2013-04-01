Node.js Static Http File Server Bootstrap
=========================================

Basic Node.js bootstrapper which contains all the code required to setup a http server that serves static files in the provided _client_ folder using the Nodestatic package.

This provides a good starting point for any Node.js applications hosting a website.  It also ensures that NodeStatic does not expose server side code to the client by segregating all static files into a sub-folder.

Setup
-----

1. Ensure you have [Node.js](http://nodejs.org/) setup 
2. Download this git repository
3. Extract the repository into a folder (EG: _C:\NodeBootstrap_)
4. Run _Node.js C:\NodeBootstrap\server.js_
5. Go to _http://localhost_

Notes
-----

* All files to be served should be placed in the _/client_ folder
* NodeStatic is setup to show _/client/index.htm_ as the default page