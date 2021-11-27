import styled from '@emotion/styled';
import { Box } from "@mui/system";

const ResponsiveBox = styled(Box)`
    width: calc(100%);
    @media (min-width: 75rem) {
        width: 75rem;
        margin: 0 auto;
    }
`
const FlexBox = styled.div`
    display: flex;
`
const InputText = styled.input`
    background-color: var(--gray1);
    padding: .25rem .5rem;
    border: 0;
    outline: 0;
    font-size: 1rem;
    color: var(--gray5);
    font-family: var(--font1);
`
const InputLabel = styled.label`
    font-size: .875rem;
`

export { 
    ResponsiveBox, 
    FlexBox, 
    InputText,
    InputLabel
}