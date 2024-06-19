import styled from "styled-components";

const EditorStyle = styled.div`
  .ant-input,
  .ant-picker {
    border-radius: 0px !important;
    min-height: 50px;
  }
  .ant-form-item {
    margin-bottom: 2rem;
  }
  .ant-steps{
    margin-top: 40px;
  }
  .dark {
    .ant-steps-item-title {
      color: #fff !important;
    }
    .ant-steps-item-process .ant-steps-item-icon {
      background-color: #ff7714 !important;
      border-color: #ff7714 !important;
    }
    .ant-steps-item-wait .ant-steps-item-icon {
      background-color: white !important;
      border-color: #7bc8d3 !important;
    }
  }
  .light {
    .ant-steps-item-title {
      color: #000 !important;
    }
    .ant-steps-item-process .ant-steps-item-icon {
      background-color: #ff7714 !important;
      border-color: #ff7714 !important;
    }
    .ant-steps-item-wait .ant-steps-item-icon {
      background-color: #7bc8d3 !important;
      border-color: #7bc8d3 !important;
    }
  }
  .fixed-block {
    position: fixed;
    top: 54px;
    right: 0;
    max-width: 49%;
    min-width: 49%;
    height: 100vh; /* Adjust height as needed */
    overflow-y: auto; /* Enable scrolling if content overflows */

    padding-bottom: 70px;
    background-color: white; /* Ensure the background remains white */
  }
`;

export default EditorStyle;
