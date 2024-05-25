import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardImg, t1, t2, t3, t4, t5, t6 } from '../../Layouts/modelpredefinisImg/modelImg';
import './style.css';
import Article from './typeDeModel/Article';

export const ModelPrefinis: React.FC = () => {
    const [currentData, setCurrentData] = useState<CardImg[]>([]);
    const [showCarousel, setShowCarousel] = useState<boolean>(false);
    const handleClick = (data: CardImg[]) => {
        setCurrentData(data);
        setShowCarousel(true);
    };

    const renderCardContentTitle = () => {
        if (currentData.length > 0) {
            const { title } = currentData[0];
            return (
                <div className="card__content">
                    <h3>{title}</h3>
                </div>
            );
        }
        return null;
    };

    const renderCardContentSubtitle = () => {
        if (currentData.length > 0) {
            const { subtitle } = currentData[0];
            return (
                <div className="card__content">
                    <p>{subtitle}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <Box padding={5}>
            <Card
                height={{
                    base: '610px', // 0-48em
                    md: '605px', // 48em-80em,
                    xl: '685px', // 80em+
                }}
                width={{
                    base: '100%', // 0-30em
                    md: '100%', // 30em-48em
                    xl: '100%', // 48em-62em
                }}
                style={{ overflowX: 'scroll', overflowY: 'scroll' }}
            >
                {!showCarousel ? (
                    <SimpleGrid
                        spacing={3}
                        templateColumns="repeat(3, minmax(10px, 1fr))"
                        padding={12}
                        marginTop={10}
                        className="card-grid"
                    >
                        {' '}
                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t1)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        CASSIA
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            T1
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t2)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        BISSAP
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            T2
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t3)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        PLEIN TERRE (ACACIA)
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            T3
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t4)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        KOLA
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            T4
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t5)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        NEEM
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            T5
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="card">
                            <Card bg={'#e6f7f7'} onClick={() => handleClick(t6)} style={{ cursor: 'pointer' }} className="card__bg">
                                <CardHeader>
                                    <Heading size="sm" color={'#008080'}>
                                        BAOBAB
                                    </Heading>
                                </CardHeader>
                                <CardBody></CardBody>
                                <CardFooter>
                                    <SimpleGrid
                                        spacing={1}
                                        templateColumns="repeat(3, minmax(100px, 1fr))"
                                        padding={0}
                                    >
                                        <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                            |
                                        </Text>
                                        <Text fontSize={30} fontWeight={'bolder'} color={'#008080'}>
                                            Duplex
                                        </Text>
                                    </SimpleGrid>
                                </CardFooter>
                            </Card>
                        </div>
                    </SimpleGrid>
                ) : (
                    <Box
                        className="cards"
                        padding={8}
                    >
                        <Card bg={'#e6f7f7'} style={{width:'30%'}}>
                            <CardHeader>
                                <Heading size="sm" color={'#008080'}>
                                    {renderCardContentTitle()}
                                </Heading>
                            </CardHeader>
                            <CardBody></CardBody>
                            <CardFooter>
                                <SimpleGrid
                                    spacing={1}
                                    templateColumns="repeat(3, minmax(100px, 1fr))"
                                    padding={0}
                                >
                                    <Text fontSize={30} fontWeight={'bolder'} color={'#008080'}>
                                        |
                                    </Text>
                                    <Text fontSize={30} fontWeight={'bolder'} color={'#008080'}>
                                        {renderCardContentSubtitle()}
                                    </Text>
                                </SimpleGrid>
                            </CardFooter>
                        </Card>

                        <Swiper
                            style={{ marginTop: '10%' }}
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {currentData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Article data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                )}
            </Card>

        </Box>
    );
};