const Mybuttons = ({ btn_text }) => {
    console.log(btn_text);
    return (
        <button className="btn btn-primary m-2">
            {btn_text}
        </button>
    )
}

export default Mybuttons;