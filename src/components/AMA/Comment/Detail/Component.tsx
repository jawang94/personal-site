/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components/macro';
import Author from '../../shared/Author';
import CommentDetailTimestamp from './Timestamp';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  font-size: 13px;
  align-items: center;
`;

class CommentDetail extends React.Component<any, any, any> {
  deleteComment = () => this.props.attemptDeleteComment(this.props.id);

  render() {
    return (
      <Wrapper>
        <Author
          username={this.props.author && this.props.author.username}
          admin={this.props.author?.admin}
        />
        <CommentDetailTimestamp created={this.props.created} />
        {this.props.token &&
          (this.props.user.id === this.props.author.id ||
            this.props.user.admin) && (
            <DeleteButton onClick={this.deleteComment} />
          )}
      </Wrapper>
    );
  }
}

export default CommentDetail;
