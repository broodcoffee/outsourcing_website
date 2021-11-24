import styled from '@emotion/styled';
import { Box } from "@mui/system";

const ResponsiveBox = styled(Box)`
    @media (min-width: 75rem) {
        width: 75rem;
        margin: 0 auto;
    }
`

export { ResponsiveBox }