import styled from '@emotion/styled';
import { Box } from "@mui/system";

const ResponsiveBox = styled(Box)`
    width: calc(100% - 2rem);
    @media (min-width: 75rem) {
        width: 75rem;
    }
`

export { ResponsiveBox }