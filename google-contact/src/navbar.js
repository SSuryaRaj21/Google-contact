import { Google_logo,  Logo1 } from "./img ";

export default function Navbar(){
 

    return(
        <div className="bg-warning">
 <nav class="navbar navbar-light   container">
  <div>
  <div class="dropdown">
  <a href="/"><img src={Logo1} width={'50px'} /> </a>
  <div class="dropdown-content">
  <a href="/new">Create Contact</a>
  <a href="/view">Read Contact</a>
   
  </div>
</div>
  
  </div>
  <form >
   <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control form-control-sm" placeholder="search here" aria-label="form-control-sm example" aria-describedby="basic-addon1"></input>
    </div>
  
  </form>
      <div className="float-end">
      <img src={Google_logo} className="g_logo"/>
    </div>
</nav>
        </div>
    )
}