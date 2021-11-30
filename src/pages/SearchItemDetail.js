import styled from "@emotion/styled";
import { useGlobalDataContext } from "../App";
import { theme } from "../mui-theme";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

const SearchItemDetail = () => {

    const { itemDetail } = useGlobalDataContext();
    let {
        jobName,
        category, 
        description, 
        compensation, 
        duration, 
        employer, 
        date,
        lang,
        jobId,
    } = itemDetail;
    
    return (
        <>
            <Container>
                <BackLink>
                    <Button 
                        variant="text" 
                        startIcon={<ArrowBack htmlColor="#228fcf"/>} 
                        onClick={() => window.history.back()}
                    >
                        Back
                    </Button>
                </BackLink>
                <SubContainer1>
                    <ItemHeader>{ jobName }</ItemHeader>
                    <ItemBody>{ description }</ItemBody>
                    <ItemTag>
                        { lang.sort().map( tag => <TagContent key={tag}>{ tag }</TagContent> ) }
                    </ItemTag>
                    <ItemInfo>
                        <ItemInfoContent>Rate: <span>${ compensation }/hour</span></ItemInfoContent>
                        <ItemInfoContent>
                            Duration:&nbsp;
                            <span>
                            { duration >= 1 ? duration : 4 * duration } 
                            { 
                                duration < 1 ? 
                                ( 4 * duration === 1 ? ' week' : ' weeks' ) : 
                                ( duration > 1 ? ' months' : ' month')
                            }
                        </span>
                        </ItemInfoContent>
                        <ItemInfoContent>Posted: <span>{ date }</span></ItemInfoContent>
                    </ItemInfo>
                </SubContainer1>
                <SubContainer2>
                    <div>
                        {
                            category.map(item => <div>{item}</div> )
                        }
                    </div>
                </SubContainer2>
            </Container>
        </>
    )
}

export default SearchItemDetail

const BackLink = styled.a`
    text-decoration: none;
    color: var(--color2);
    font-family: var(--font2);
`
const Container = styled.div`
    display: flex;
    text-decoration: none;
    padding: 2rem;

    @media (max-width: 48rem) {
        flex-direction: column;
    padding: 1rem;
    }

`
const SubContainer1 = styled.div`
    padding: 2rem 1rem;
    padding-right: 2rem;
    width: 75%;

    @media (max-width: 48rem) {
        width: 100%;
    }
`
const SubContainer2 = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--gray);
    width: 25%;
    margin-top: 2rem;

    @media (max-width: 48rem) {
        width: 100%;
        padding: 2rem;
        margin: 0;
    }
`

const ItemHeader = styled.h3`
    color: ${theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -8%;
`
const ItemBody = styled.p`
    margin-left: .125rem;
    font-size: 1rem;
    color: ${theme.palette.grey[800]};
    font-family: var(--font3);
    font-weight: 300;
    line-height: 160%;
    letter-spacing: -.25px;
    overflow: hidden;
`
const ItemTag = styled.div`
    font-size: .875rem;
    font-weight: 500;
    color: ${theme.palette.grey[700]};
`
const TagContent = styled.span`
    display: inline-block;
    padding: .125rem .5rem;
    border-radius: 1rem;
    background-color: ${theme.palette.grey[50]};
    margin-right: .5rem;
    margin-top: .5rem;
`
const ItemInfo = styled.div`
    color: ${theme.palette.grey[700]};
    font-size: .75rem;
    margin-top: .5rem;
`
const ItemInfoContent = styled.span`
    display: inline-block;
    margin-right: 1rem;
    font-weight: 500;
    margin-top: .5rem;

    span {
        color: ${theme.palette.secondary.main};
        font-weight: 600;
    }
`