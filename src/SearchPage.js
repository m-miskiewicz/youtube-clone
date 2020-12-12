import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwngdP3okXEWSNOV0jPGYSd7ulTVjYg3cJ3ENrvxU5w=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="TEDx Talks"
                verified
                subs="28.4M"
                noOfVideos={160555}
                description="TEDx is an international community that organizes TED-style events anywhere and everywhere -- celebrating locally-driven ideas ..."
            />
            <hr />
            <div className="searchPage__title">
                <h2>Newest on TEDx Talks channel</h2>
            </div>
            <VideoRow
                views="1.3K"
                subs="28.4M"
                description="What if you could experience physical movement the same way a dancer does? Screendance director Alicia Ross introduces this unconventional art form..."
                timestamp="12 hours ago"
                channel="TEDx Talks"
                title="Screendance: the art of combining film and dance / 'in the void' | Alicia Ross | TEDxSaltLakeCity"
                image="https://i.ytimg.com/vi/9iYj4TlRR4A/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZUtZoaZ0GnztoDlrv4C01aXXz4Q"
            />
            <VideoRow
                views="628"
                subs="28.4M"
                description="Salma Hayek is quoted as saying, 'People often say that 'beauty is in the eye of the beholder,' and I say that the most liberating..."
                timestamp="12 hours ago"
                channel="TEDx Talks"
                title="Balancing the value of character and great brows | Kennedy Pawloski | TEDxSaltLakeCity"
                image="https://i.ytimg.com/vi/J2yEZqdpTYY/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBkrXrbii97zGqI2IBM5YdhbRSFqQ"
            />
            <VideoRow
                views="413"
                subs="28.4M"
                description="The way our environment works is fairly related with science and religion. Fachruddin Mangunjaya as a leading eco-activist in the Muslim world..."
                timestamp="13 hours ago"
                channel="TEDx Talks"
                title="Verses of Nature: Khilafah on Earth | Fachruddin Mangunjaya | TEDxJakarta"
                image="https://i.ytimg.com/vi/T7Hkn9MTwUY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQo81bIXOMEaaN0ywz2uVdSCKChQ"
            />
        </div>
    )
}

export default SearchPage
