/**
 * 主观题模态窗口
 *
 * @param props
 * @returns {*}
 * @constructor
 */
import {Modal} from "antd";

const Subjective = ({ props }) => {



  return (
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default Subjective