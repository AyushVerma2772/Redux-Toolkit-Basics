import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../features/counterSlice";

const SubChild = () => {

    const count = useSelector(store => store.counter.countValue);
    const name = useSelector(store => store.abc.name);
    const dispatch = useDispatch()



    return (
        <>

            <h3>I am sub child: {count} </h3>

            <p>My name is {name}</p>

            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())} >decrement</button>
            <button onClick={() => dispatch(incrementByValue(5))}>increment by value</button>

        </>
    )
}

export default SubChild