import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({
  component: Component, ...props }) => {
  
  console.log('email',props)

  return (
    <Route>
      {() => props.login? <Component {...props}/>: <Redirect to="/sign-in"/>}
    </Route>
  )
}

export default ProtectedRoute;