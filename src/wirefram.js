<div>
    <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="row border">
            <h1 className="col-12 text-center">To-Do List:</h1>
            <div className="col-12 px-3">
                <input className="col-6 px-1" placeholder="To-Do"></input>
                <button className="btn btn-primary col-6 px-1">Submit</button>
            </div>
            <ul className="list-unstyled pl-3">
                <li className="py-1 d-flex">
                    <input id="item1" className="mx-2" type="checkbox"></input>
                    <p>groceries</p>
                    <button className="btn btn-danger mx-2">X</button>
                </li>
                <li className="py-1 d-flex">
                    <input id="item2" className="mx-2" type="checkbox"></input>
                    <p>Homework</p>
                    <button className="btn btn-danger mx-2">X</button>
                </li>
                <li className="py-1 d-flex">
                    <input id="item3" className="mx-2" type="checkbox"></input>
                    <p>Gym</p>
                    <button className="btn btn-danger mx-2">X</button>
                </li>
                <li className="py-1 d-flex">
                    <input id="item4" className="mx-2" type="checkbox"></input>
                    <p>Shower</p>
                    <button className="btn btn-danger mx-2">X</button>
                </li>
            </ul>
        </div>
    </div>
</div>
