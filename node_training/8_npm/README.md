Node Package Manager

Package: Collection of code
Package mgmt: Software that automates installing and updating packages
Dependencies : Code that another set of code depends on to function
Versioning: Specifying what version of a set of code this is
Semantic Version (semver) : 

Major.Minor.Patch
		Bugs fixeds, your code will work fine
	Some new features added, backward compatible
Big changes, your code might break

Npm Registry: (npmjs.com) is open to everyone
Npm : Actual program is software comes with node.js (npm -v)

init -> (npm init) name, version, description, entry-point, author, license

nodemon ->  Node monitoring, restart the server and start on changes
	Some of them have cli directory just to have it available

package.json -> Created by npm init
	scripts... [test]
	dependencies 
		^Anything in major release,
		~Only patches releases
	devDependencies


npm install moment 
		--save ... download files, add the dependency in package.json and add to node_modules
		--save-dev .. 
	    -g ... put a location global not node_modules

npm update 
	== check newer version and update them, override in package.json
