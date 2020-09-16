import React from "react";

const Element = () => <h1>Hello</h1>;
const NotToShow = () => <h1>You cant see me!!</h1>;

const TruthyFalsy = () => {
  return (
    <div>
      <h3>
        The && operator doesnt evaluate the right side if the left side is falsy
      </h3>
      <h4>[], [1,2], 1, true, 'this is it' are Truthy</h4>
      {[] && <Element />}
      {[1, 2] && [1, 2].map(() => <Element />)}
      {1 && <Element />}
      {true && <Element />}
      {"this is it" && <Element />}
      {!!"something" && <Element />}
      {!![] && <Element />}
      {undefined && undefined.map(() => {})}
      {undefined && undefined.forEach(() => {})}

      <h4>undefined, 0, false, '' is Falsy</h4>
      {undefined && <NotToShow />}
      {0 && <NotToShow />}
      {false && <NotToShow />}
      {"" && <NotToShow />}
      {[] && [].length && <NotToShow />}

      <h3>The || operator shows whats on right if the left side is falsy!!</h3>
      {0 || <Element />}
      {1 || <Element />}
      <p>true , false within a JSX is not shown!!</p>
      {[] || <Element />}
      {true}
      {false}
      {undefined || <Element />}
      {"" || <Element />}

      <h3>The ternary operator!!</h3>
      {!undefined ? <Element /> : <NotToShow />}
      {undefined ? <NotToShow /> : <Element />}
      {[] ? <Element /> : <NotToShow />}
      {[1,2,3] ? <Element /> : <NotToShow />}
      {[] && [].length ? <NotToShow/>: <Element/>}
      {'' ? <NotToShow/>: <Element/>}
    </div>
  );
};

export default TruthyFalsy;
