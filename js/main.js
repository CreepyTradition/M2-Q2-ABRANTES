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

//Object Move
//cube.position.x = -0.5;

// Object animation
function animate() {
	requestAnimationFrame( animate );
	
	//start animation
	cube.rotation.x += 5;
	cube.rotation.y += 5;
	cube.rotation.z += 5;

	torus.rotation.y += 0.01;

	//cube.position.x += 1;
	//end animation

	renderer.render( scene, camera );
}
animate();