import { useContext } from 'react'
import { EditOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';

import { CategoryContext, TitleContext } from '../../context';

import { editCategory } from '@/services/category';

export default () => {
  const {category, parentNode} = useContext(TitleContext);
  const {refresh} = useContext(CategoryContext);

  const onFinish = async function ({name}) {
    await editCategory({id: category.id, name});
    
    message.success('编辑成功');
    refresh(parentNode);

    return true;
  }

  return (
    <ModalForm
      title="编辑分类"
      trigger={
        <EditOutlined className="edit" />
      }
      initialValues={{
        name: category.name
      }}
      onFinish={onFinish}
      autoFocusFirstInput
      modalProps={{width: 500}}
    >
     <ProFormText 
        name="name" 
        label="分类名称"
      />
    </ModalForm>
  );
};