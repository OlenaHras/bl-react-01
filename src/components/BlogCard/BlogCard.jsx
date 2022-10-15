import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  Tag,
  CardTitle,
  CardText,
  CardFooter,
  UserBox,
  Avatar,
  UserInfo,
  UserName,
  DateStyle,
} from './BlogCard.styled';

import { formatDistanceToNow } from 'date-fns';
const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), {addSuffix: true})
};

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
   return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster
            src={poster}
            alt={title}
          />
        </CardHeader>
        <CardBody>
          <Tag>{tag }</Tag>
          <CardTitle>{title }</CardTitle>
          <CardText>
            {description }
          </CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={userName} />
            <UserInfo>
              <UserName>{ userName}</UserName>
              <DateStyle>{formatDateToNow(postedAt)}</DateStyle>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};
