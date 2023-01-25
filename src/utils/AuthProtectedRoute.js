import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import AppRoutes from "./routes";

export const ProtectedRoute = (props) => {
    const location = useLocation();
    if (props.auth.isAuthenticated && localStorage.getItem('token')) {
        if (location?.search?.split('&')[1]?.split('=')[1]) {
            window.location = `/${location?.search?.split('&')[1]?.split('=')[1]}`;
        } else {
            return <Navigate to={AppRoutes.profile_dashboard} />;
        }
    } else {
        return props.children;
    }
};

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(ProtectedRoute);