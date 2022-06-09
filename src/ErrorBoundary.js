//componentDidCatch to handle the errors

import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    state = {hasError:false};
    static getDerivedStateFromErrror(){
        return {hasError:true}
    }
}