import React from 'react';
import PropTypes from 'prop-types';


const Hooks = () => {
    const [state, setstate] = useState(initialState);

    useEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [input]);

    useMemo(() => function, input)

    const [state, dispatch] = useReducer(reducer, initialState, init)

    const ref = useRef(initialValue)

    const state = useSelector(state => state.state)

    useCallback(
        () => {
            callback
        },
        [input],
    )

    const context = useContext(contextValue)

    useDebugValue(value)

    const dispatch = useDispatch(function)

    useLayoutEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [input])

    return (
        <div>
            
        </div>
    );
};


Hooks.propTypes = {

};


export default Hooks;
