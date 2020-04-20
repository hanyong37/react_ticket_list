import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({
      desc: fields.desc,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async selectedRows => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map(row => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      hideInSearch: true,
      render: (_, record) => (
        <>
          <Avatar src={record.user.avatar} />
          <a herf={record.house_path}> {record.user.name} </a>
        </>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'archived',
      hideInTable: true,
      valueEnum: {
        inbox: {
          text: 'Inbox',
          status: 'inbox',
        },
        archived: {
          text: 'Archived',
          status: 'archived',
        },
        starred: {
          text: 'Starred',
          status: 'starred',
        }
      },
    },
    {
      title: 'Starred',
      dataIndex: 'starred',
      valueEnum: {
        orange: {
          text: 'Orange',
          status: 'orange',
        },
        pink: {
          text: 'Pink',
          status: 'pink',
        },
        red: {
          text: 'Red',
          status: 'red',
        },
        green: {
          text: 'Green',
          status: 'green',
        }
      },
      render: (_, record) => (
        <>
          <FontAwesomeIcon icon={faStar} color={record.starred} />
        </>
      ),
    },
    {
      title: 'Property Name',
      dataIndex: 'house_name',
      render: (_, record) => (
        <>
          <a herf={record.house_path}> {record.house_name} </a>
         <div>{record.room_name}</div> 
        </>
      ),
    },
    {
      title: 'Checkin',
      hideInSearch: true,
      dataIndex: 'dtstart',
    },
    {
      title: 'Checkout',
      hideInSearch: true,
      dataIndex: 'dtend',
    },
    {
      title: 'Description',
      hideInSearch: true,
      dataIndex: 'description',
      renderText: (val) => ( <a herf='#'> {val} </a>),
      render: (_, record) => (
        <>
          <a herf="#"> {record.summary} </a>
         <div>{record.description}</div> 
        </>
      ),
    },
    {
      title: 'Update',
      hideInSearch: true,
      dataIndex: 'updated_at',
      renderText: (val) => new Date(val).toDateString(),
    },
    {
      title: 'Property Tag',
      hideInTable: true,
      dataIndex: 'house_tags',
    },
    {
      title: 'Confirm Number',
      dataIndex: 'confirm_number',
      render: (_, record) => (
        <> 
          <span>{record.user.bookings.length < 1 ? '' : record.user.bookings[0].confirm_number} </span>
        </>
      )
    }
  ];
  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="Ticket List"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            Create
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Button type="danger" onClick={() => alert('deleted!')}>
              Delete
            </Button>
          ),
          selectedRows && selectedRows.length > 0 && (
            <Button type="default" onClick={() => alert('Archive')}>
              Archive
            </Button>
          ),
          selectedRows && selectedRows.length > 0 && (
            <>
              <Dropdown
                overlay={
                  <Menu
                    onClick={async e => {
                      alert('star to '+e.key)
                    }}
                    selectedKeys={[]}
                  >
                    <Menu.Item key="orange"> <FontAwesomeIcon icon={faStar} color="orange"/> </Menu.Item>
                    <Menu.Item key="red"><FontAwesomeIcon icon={faStar} color="red"/></Menu.Item>
                    <Menu.Item key="pink"><FontAwesomeIcon icon={faStar} color="pink"/></Menu.Item>
                  </Menu>
                }
              >
                <Button>
                  Star <DownOutlined />
                </Button>
              </Dropdown>
            </>
          ),
        ]}
        tableAlertRender={(selectedRowKeys, selectedRows) => (
          <div>
            已选择{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            项&nbsp;&nbsp;
          </div>
        )}
        request={params => queryRule(params)}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm
        onSubmit={async value => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default TableList;
