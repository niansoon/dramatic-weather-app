const AreaInput = (props) => {

    const handleChange = () => {
        props.userRegion("central")
    }

    handleChange();
}

export default AreaInput;