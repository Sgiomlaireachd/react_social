import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  getUsersPage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <Pagination
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          totalInstancesCount={this.props.totalUsersCount}
          getInstances={this.getUsersPage}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
        <Pagination
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          totalInstancesCount={this.props.totalUsersCount}
          getInstances={this.getUsersPage}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    updateFollowingInProgress: state.usersPage.updateFollowingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
})(UsersAPIComponent);

export default UsersContainer;
