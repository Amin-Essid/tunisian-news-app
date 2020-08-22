import React from 'react';
import Image from 'gatsby-image';
import {Link} from "gatsby";

type Props = {
    post: {
        childContentfulPostArticleTextNode: {
            article: string;
        };
        childContentfulPostDescriptionTextNode: {
            description: string;
        };
        contentful_id: string;
        title: string;
        slug: string;
        mainImage: {
            fluid: any;
        }
    }
}

const Hero: React.FC<Props> = ({post}) => {

  return (

    <Link to={`/${post.slug}`}>
      <div className="hero-section">
          <div className="hero-img">
              <Image fluid={post.mainImage.fluid} />
          </div>
          <h2 className='hero-title'>
              {post.title}
          </h2>
      </div>
    </Link>
  );
}

export default Hero


// <Card elevation={0} className="hero-section">
      {/* <CardActionArea> */}
        {/* <CardMedia
          component={Image}
        //   className={classes.media}
          image={post.mainImage.fluid}
          title="Contemplative Reptile"
        /> */}
        {/* <CardHeader
            avatar={ */}
            // <div className="hero-img">
            //     <Image fluid={post.mainImage.fluid} />
            // </div>
            {/* }
        /> */}
        {/* </CardMedia> */}
        {/* <CardContent> */}
        //   <Typography component="h2">
        //     {post.title}
        //   </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {post.childContentfulPostDescriptionTextNode.description}
          </Typography> */}
        {/* </CardContent>
      </CardActionArea> */}
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    // </Card>