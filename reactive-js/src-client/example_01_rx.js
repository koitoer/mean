import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

//Convention to Observable objects
const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
const queries$ = keyUps$.map(e => e.target.value)
						.distinctUntilChanged()
						.debounceTime(250)
						//.mergeMap(query => getItems(query)); //flatMap as alias
						.switchMap(query => getItems(query)); // new item before other comes, discard old data
															  // return after the last item complete
															  // flatMapLatest 

//Entire common observable and pipeline
//We dont have an external state. Just internal state
//Completely declarative
//Rx.Observable.fromEvent($title, "keyup").map(e => e.target.value)
//		.distinctUntilChanged().debounceTime(250).switchMap(getItems)
//		.subscribe(items => {
//			$results.empty();
//			$results.append(items.map( r => $(`<li />`).text(r)));
//		});


//The above method change for the mergeMaps chain
//queries$.subscribe( query => {
//	getItems(query)
//		.then(items => {
//			$results.empty();
//			$results.append(items.map( r => $(`<li />`).text(r)));
//		});
//});

queries$.subscribe( items => {
	$results.empty();
	$results.append(items.map( r => $(`<li />`).text(r)));
});



function getItems(title){
	console.log(`Querying ${title}`);
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve([title,"Item 2", `Another item ${Math.random()}`]);
		}, 500 + (Math.random() * 5000)); 
	});
}