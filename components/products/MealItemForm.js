import {Fragment, useRef, useState} from "react";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        console.log(enteredAmountNumber);
    };

    return (
      <Fragment>
          <form onSubmit={submitHandler}>
              <input
                  type="number"
                  id="amount"
                  min="1"
                  max="5"
                  step="1"
                  defaultValue="1"
                  ref={amountInputRef}
              />

              <button>
                  + Add
              </button>

          </form>
      </Fragment>
    );
};

export default MealItemForm;