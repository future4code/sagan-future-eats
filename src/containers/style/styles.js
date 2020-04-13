import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const FormStyle = styled.form`
  width: 35%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`

