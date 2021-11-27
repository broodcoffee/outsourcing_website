import styled from '@emotion/styled';
import { theme } from '../../mui-theme';

const SearchItem = ({ header, body, tags, compensation, duration, postDate }) => {
    const d = new Date(postDate)
    return (
        <ItemContainer >
            <ItemHeader>{ header }</ItemHeader>
            <ItemBody>{ body }</ItemBody>
            <ItemTag>
                { tags.sort().map( tag => <TagContent key={tag}>{ tag }</TagContent> ) }
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
                <ItemInfoContent>Posted: <span>{ d.toDateString() }</span></ItemInfoContent>
            </ItemInfo>
        </ItemContainer>
    )
}

export default SearchItem

const ItemContainer = styled.div`
    width: 100%;
    padding: .5rem 1rem;
    margin-bottom: 2rem;
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
    line-height: 140%;
    letter-spacing: -.25px;
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