const TextArea = ({ twitter, facebook, character, words, onChange }) => {
    return (
        <div className="container d-flex justify-content-center">
            {" "}
            <div
                className="row g-0 bg-light border"
                style={{ width: "75%", height: "500px" }}
            >
                {" "}
                <div className="col-8 p-0">
                    {" "}
                    <textarea onChange={onChange}
                        className="form-control w-100 h-100"
                        style={{ resize: "none", border: "none" }}
                        placeholder="Enter Your Text"
                    ></textarea>{" "}
                </div>
                <div className="col-4 p-0">
                    <div style={{ border: "1px solid black" }} className="row h-50 g-0">
                        <div
                            style={{
                                borderRight: "1px solid black",
                                borderBottom: "1px solid black",
                            }}
                            className="col d-flex justify-content-center align-items-center flex-column  "
                        >

                            <h2>{words}</h2>
                            <span style={{ letterSpacing: "1px" }}>WORDS</span>


                        </div>
                        <div className="col d-flex justify-content-center align-items-center flex-column ">
                            <h2>{twitter}</h2>
                            <span style={{ letterSpacing: "1px" }}>TWITTER</span>

                        </div>
                    </div>
                    <div style={{ border: "1px solid black" }} className="row h-50 g-0 ">
                        <div
                            style={{ borderRight: "1px solid black" }}
                            className="col d-flex justify-content-center align-items-center flex-column "
                        >
                            <h2>{character}</h2>
                            <span style={{ letterSpacing: "1px" }}>CHARACTER</span>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center flex-column ">
                            <h2>{facebook}</h2>
                            <span style={{ letterSpacing: "1px" }}>FACEBOOK</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TextArea;
