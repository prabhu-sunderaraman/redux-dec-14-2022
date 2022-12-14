#### Need for Redux

* React applications that are made up of components
* Each component has data or state
* Make changes to the state, the component gets re-rendered
* Component has the functions that modify/manipulate the state
* More the components, you start passing your state to each other
* As the data keeps getting exchanged between components, it becomes tedious to maintain after some point of time

* __Flux__ pattern
* Externalize all the state data and the functions that operate on this data
* The data flow becomes uni-directional.

* Perform an action on a component. 
* The component reaches out to the __external place__; 
* The appropriate function gets invoked; 
* the appropriate state gets modified;
* the __external place__ notifies the component with the modified data; 
* component re-renders itself

* __MobX__, __Context API__ some alternatives 
* __Redux__ is a library to implement the Flux pattern

* __Store__ is the external place
* Store contains __state__
* __Reducers__ are the functions that manipulate the state
* Reducer is a pure function
* Component invokes a store by sending(__dispatching__) an __action__

### Redux

* The Redux code that you use with class-based components is very different from function components
* __sudo npx create-react-app my-react-redux-app__
* You can use __redux__ directly or __reduxjs toolkit__
* __sudo npm i -S @reduxjs/toolkit react-redux__
* Install redux devtools chrome extension

* set up the state;
* set up the reducer function;
* set up a store;  
* You need to use only two functions; __createSlice__, __configureStore__

* store needs to be included in all the components in your application
* Use <Provider> to provide the store to your root component 