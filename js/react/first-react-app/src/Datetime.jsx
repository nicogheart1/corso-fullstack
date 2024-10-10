const Datetime = () => {
    const newDate = new Date();
    console.log("newDate:", newDate)

    return (
        <div onMouseOver={(event) => { console.log("mi sei passato sopra", event)}}>
            {newDate.toLocaleTimeString()}
        </div>
    );
};

export default Datetime;