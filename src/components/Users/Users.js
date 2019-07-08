import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';

function mapStateToProps({ users }) {
  const { list, total, page } = users;
  return {
    list,
    total,
    page,
  };
}


class Users extends React.Component{
	componentDidMount() {
		this.props.dispatch({
			type: 'users/fetch',
			payload: {
				page: 1,
			},
		})
	}

	deleteHandler = (id) => {
			console.log(`TODO: ${id}`);
	}
	
	getColumns = () => {
		return [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				render: text => <a href="">{text}</a>,
			},
			{
				title: 'Email',
				dataIndex: 'email',
				key: 'email',
			},
			{
				title: 'Website',
				dataIndex: 'website',
				key: 'website',
			},
			{
				title: 'Operation',
				key: 'operation',
				render: (text, { id }) => (
					<span className={styles.operation}>
						<a href="">Edit</a>
						<Popconfirm title="Confirm to delete?" onConfirm={() => { this.deleteHandler(null, id) }}>
							<a href="">Delete</a>
						</Popconfirm>
					</span>
				),
			},
		];
	}
	render() {
		const { list: dataSource, total, page: current } = this.props
		return (
			<div className={styles.normal}>
				<div>
					<Table
						columns={this.getColumns()}
						dataSource={dataSource}
						rowKey={record => record.id}
						pagination={false}
					/>
					<Pagination
						className="ant-table-pagination"
						total={total}
						current={current}
						pageSize={PAGE_SIZE}
					/>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Users);