import React from 'react';

export default class FileHeader extends React.Component{
    render(){
        return(
            <header>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" width='300px'height='150px'/>
                        </div>
                        {/* <div className="col-8 header" style={{textAlign:'center'}}><h3>Ghibli Movie List</h3></div> */}
                        <div className="col-2"></div>
                    </div>
                </div>

            </header>
        )
    }
}