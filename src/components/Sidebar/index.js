import React from 'react';
import { connect } from 'react-redux';

import { TRANSACTION_HISTORY, BENEFICIARY, DASHBOARD, PROFILE } from '../../Constants';
import { changePage } from '../../Actions/GlobalActions';
import './sidebar.css';

export const Sidebar = ({
    globalState, 
    userDetails, 
    dispatchChangePage
}) => {
    const { isLoggedIn, currentPage } = globalState;
    const { otherDetails: { name } } = userDetails;

    return (
        <div className="sidebar">
            <div className="userProfile">
                <img src={require("../../assets/profile.png")} className="profileImg" alt={name} />  
                <span>{`Hello, ${name} !`}</span>
                <em>Last Login: 15 Sept, 2020 16:30</em>
            </div>
            <div className="navMenu">
                {isLoggedIn && 
                    <nav>
                        <ul>
                            <li className={currentPage === DASHBOARD ? 'activeMenu' : ''} onClick={() => dispatchChangePage(DASHBOARD)}>Dashboard</li>
                            <li className={currentPage === TRANSACTION_HISTORY ? 'activeMenu' : ''} onClick={() => dispatchChangePage(TRANSACTION_HISTORY)}>Account Summary</li>
                            <li className={currentPage === BENEFICIARY ? 'activeMenu' : ''} onClick={() => dispatchChangePage(BENEFICIARY)}>Manage Beneficiary</li>
                            <li className={currentPage === PROFILE ? 'activeMenu' : ''} onClick={() => dispatchChangePage(PROFILE)}>My Profile</li>
                            <li>Logout</li>
                        </ul>
                    </nav>
                }
            </div>
        </div>
    );
}

export const mapStateToProps = state => ({
  globalState: state.globalState,
  userDetails: state.userDetails
});

const mapDispatchToProps = {
  dispatchChangePage: changePage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
