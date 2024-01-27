const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 15;

// Box geometry
const cubegeometry = new THREE.BoxGeometry( 2, 2, 2 );
const cubematerial = new THREE.MeshBasicMaterial( { color: "red" } );
const cube = new THREE.Mesh( cubegeometry, cubematerial );
scene.add( cube );

//Torus geometry
const torusgeometry = new THREE.TorusGeometry( 3, 1, 8, 50 ); 
const torusmaterial = new THREE.MeshBasicMaterial( { color: "orange" } ); 
const torus = new THREE.Mesh( torusgeometry, torusmaterial ); scene.add( torus );

//Cone geometry
const conegeometry = new THREE.ConeGeometry( 3, 10, 16 ); 
const conematerial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(conegeometry, conematerial ); scene.add( cone );

//Capsule geometry
const capsulegeometry = new THREE.CapsuleGeometry( 2, 3, 4, 8 ); 
const capsulematerial = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const capsule = new THREE.Mesh( capsulegeometry, capsulematerial ); scene.add( capsule );

//Sphere geometry
const spheregeometry = new THREE.SphereGeometry( 2, 8, 4 ); 
const spherematerial = new THREE.MeshBasicMaterial( { color: "blue" } ); 
const sphere = new THREE.Mesh( spheregeometry, spherematerial ); scene.add( sphere );

//Object position
cone.position.x = -8

capsule.position.x = 8

sphere.position.y = 8

// Object animation
function animate() {
	requestAnimationFrame( animate );
	
	//start animation
	cube.rotation.x += 0.2;
	cube.rotation.y += 0.2;
	cube.rotation.z += 0.2;

	torus.rotation.y += 0.01;

	cone.rotation.x += 0.05;

	capsule.rotation.x += 0.05;
	capsule.rotation.z += 0.05;

	sphere.rotation.x += 0.05;
	sphere.rotation.y += 0.05;
	sphere.rotation.z += 0.05;
	//end animation

	renderer.render( scene, camera );
}
animate();