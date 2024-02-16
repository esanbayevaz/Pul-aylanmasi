import { useContext } from "react"
import { Context } from "../../context/context"
import { loggedInAction } from "../../reducer/TokenReducer/action"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const { tokenDispatch } = useContext(Context)
  const loginHandler = e => {
    e.preventDefault()
    const forma = new FormData(e.target);
    const { tel, parol } = Object.fromEntries(forma.entries())
    if (tel === "7" && parol === "7") {
      tokenDispatch(loggedInAction())
      navigate('/')
    }
    else {
      alert("parol xato")
    }
  }
  return (
    <div className=' rounded-2xl flex m-auto justify-center items-center min-h-[400px] w-[500px] bg-pink-300 p-10'>
      <form onSubmit={loginHandler} action="" className=' flex gap-5 flex-col'>
        <h1 className=' flex font-bold justify-center text-gray-600 text-2xl'>Login</h1>
        <label>
          <input required name='tel' placeholder='Tel Kiriting' className='p-3 w-80 rounded-md shadow-sm border-none outline-none' type="tel" />
        </label>
        <label>
          <input autoComplete="off" required name='parol' placeholder='Parol Kiriting' className='p-3 w-80 rounded-md shadow-sm border-none outline-none' type="password" />
        </label>
        <button className='text-gray-600 font-bold text-xl bg-white rounded-lg p-2 w-60 m-auto'>Enter</button>
      </form>


    </div>
  )
}

export default Login