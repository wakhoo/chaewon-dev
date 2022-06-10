import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className="mt-10 bg-lightOlive shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <img
                                alt={post.author.name}
                                height="30px"
                                width="30px"
                                className="align-middle rounded-full border-solid border-2 border-mustard"
                                src={post.author.photo.url}
                            />
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                        </div>
                        <div className="font-medium text-gray-700">
                            <svg className="h-6 w-6 inline mr-2 " id="Capa_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m479.5 87.5v77h-447v-77c0-11.51 6.48-21.51 16-26.53 4.18-2.22 8.94-3.47 14-3.47h387c11.51 0 21.51 6.48 26.53 16 2.22 4.18 3.47 8.94 3.47 14z" fill="#fd646f" /><path d="m152.5 57.5v56c0 5.52-4.48 10-10 10h-46c-5.52 0-10-4.48-10-10v-56z" fill="#fc4755" /><path d="m409.5 57.5v56c0 5.52-4.48 10-10 10h-46c-5.52 0-10-4.48-10-10v-56z" fill="#fc4755" /><path d="m48.5 60.97v103.53h-16v-77c0-11.51 6.48-21.51 16-26.53z" fill="#fc4755" /><g fill="#e6e6e6"><path d="m114.5 224.32h51.45c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m114.5 300.77h51.45c2.761 0 5 2.239 5 5v51.46c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.46c0-2.761 2.239-5 5-5z" /><path d="m114.5 377.23h51.45c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m190.95 224.32h52.55c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m190.95 300.77h52.55c2.761 0 5 2.239 5 5v51.46c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.46c0-2.761 2.239-5 5-5z" /><path d="m190.95 377.23h52.55c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m268.5 224.32h52.55c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m268.5 300.77h52.55c2.761 0 5 2.239 5 5v51.46c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.46c0-2.761 2.239-5 5-5z" /><path d="m268.5 377.23h52.55c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-52.55c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /><path d="m402.5 229.32v51.45c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5h51.45c2.761 0 5 2.239 5 5z" /><path d="m346.05 300.77h51.45c2.761 0 5 2.239 5 5v51.46c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.46c0-2.761 2.239-5 5-5z" /><path d="m346.05 377.23h51.45c2.761 0 5 2.239 5 5v51.45c0 2.761-2.239 5-5 5h-51.45c-2.761 0-5-2.239-5-5v-51.45c0-2.761 2.239-5 5-5z" /></g><path d="m32.5 157.5v317c0 16.57 13.43 30 30 30h387c16.57 0 30-13.43 30-30v-317z" fill="#f5f5f5" /><path d="m152.5 17.5v80c0 5.52-4.48 10-10 10h-30c-5.52 0-10-4.48-10-10v-80c0-5.52 4.48-10 10-10h30c5.52 0 10 4.48 10 10z" fill="#50758d" /><path d="m109.5 224.32h61.45v61.45h-61.45z" fill="#ffac5c" /><path d="m341.05 224.32h61.45v61.45h-61.45z" fill="#ffac5c" /><path d="m185.95 224.32h62.55v61.45h-62.55z" fill="#ffac5c" /><path d="m109.5 300.77h61.45v61.46h-61.45z" fill="#ffac5c" /><path d="m341.05 300.77h61.45v61.46h-61.45z" fill="#e6e6e6" /><path d="m185.95 300.77h62.55v61.46h-62.55z" fill="#ffac5c" /><path d="m109.5 377.23h61.45v61.45h-61.45z" fill="#e6e6e6" /><path d="m341.05 377.23h61.45v61.45h-61.45z" fill="#e6e6e6" /><path d="m185.95 377.23h62.55v61.45h-62.55z" fill="#e6e6e6" /><path d="m263.5 224.32h62.55v61.45h-62.55z" fill="#ffac5c" /><path d="m263.5 300.77h62.55v61.46h-62.55z" fill="#ffac5c" /><path d="m263.5 377.23h62.55v61.45h-62.55z" fill="#e6e6e6" /><path d="m409.5 17.5v80c0 5.52-4.48 10-10 10h-30c-5.52 0-10-4.48-10-10v-80c0-5.52 4.48-10 10-10h30c5.52 0 10 4.48 10 10z" fill="#50758d" /><path d="m32.5 157.5v317c0 16.57 13.43 30 30 30h11.08c-13.99-2.54-24.58-14.78-24.58-29.5v-296.28c1.13-3.05 4.06-5.22 7.5-5.22h423v-15.5-.5z" fill="#e6e6e6" /><path d="m128.5 107.5h-16c-5.52 0-10-4.48-10-10v-80c0-5.52 4.48-10 10-10h6v90c0 5.52 4.48 10 10 10z" fill="#2b597f" /><path d="m385.5 107.5h-16c-5.52 0-10-4.48-10-10v-80c0-5.52 4.48-10 10-10h6v90c0 5.52 4.48 10 10 10z" fill="#2b597f" /></g><g><path d="m479.5 379.5c-4.143 0-7.5 3.358-7.5 7.5v87.5c0 12.407-10.094 22.5-22.5 22.5h-254c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h254c20.678 0 37.5-16.822 37.5-37.5v-87.5c0-4.142-3.357-7.5-7.5-7.5z" /><path d="m449.5 50h-32.5v-32.5c0-9.649-7.851-17.5-17.5-17.5h-30c-9.649 0-17.5 7.851-17.5 17.5v32.5h-192v-32.5c0-9.649-7.851-17.5-17.5-17.5h-30c-9.649 0-17.5 7.851-17.5 17.5v32.5h-32.5c-20.678 0-37.5 16.822-37.5 37.5v387c0 20.678 16.822 37.5 37.5 37.5h98c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-98c-12.406 0-22.5-10.093-22.5-22.5v-309.5h285.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-285.5v-62.5c0-12.407 10.094-22.5 22.5-22.5h32.5v32.5c0 9.649 7.851 17.5 17.5 17.5h30c9.649 0 17.5-7.851 17.5-17.5v-32.5h192v32.5c0 9.649 7.851 17.5 17.5 17.5h30c9.649 0 17.5-7.851 17.5-17.5v-32.5h32.5c12.406 0 22.5 10.093 22.5 22.5v62.5h-111.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h111.5v187c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-264.5c0-20.678-16.822-37.5-37.5-37.5zm-304.5 47.5c0 1.378-1.121 2.5-2.5 2.5h-30c-1.379 0-2.5-1.122-2.5-2.5v-80c0-1.378 1.121-2.5 2.5-2.5h30c1.379 0 2.5 1.122 2.5 2.5zm257 0c0 1.378-1.121 2.5-2.5 2.5h-30c-1.379 0-2.5-1.122-2.5-2.5v-80c0-1.378 1.121-2.5 2.5-2.5h30c1.379 0 2.5 1.122 2.5 2.5z" /><path d="m333.546 453.681h68.809c8.352 0 15.146-6.794 15.146-15.145v-68.809-76.454-68.809c0-8.351-6.794-15.145-15.146-15.145h-68.809-77.546-77.546-68.809c-8.352 0-15.146 6.794-15.146 15.145v68.809 76.454 68.809c0 8.351 6.794 15.145 15.146 15.145h68.809 77.546zm-224.046-152.908h61.454v61.454h-61.454zm76.454 0h62.546v61.454h-62.546zm216.546 61.454h-61.454v-61.454h61.454zm-76.454 0h-62.546v-61.454h62.546zm-62.546 15h62.546v61.454h-62.546zm139 61.309c0 .08-.065.145-.146.145h-61.309v-61.454h61.455zm0-214.072v61.309h-61.454v-61.454h61.309c.08 0 .145.065.145.145zm-76.454 61.309h-62.546v-61.454h62.546zm-77.546 0h-62.546v-61.454h62.546zm-139-61.309c0-.08.065-.145.146-.145h61.309v61.454h-61.455zm0 214.072v-61.309h61.454v61.454h-61.309c-.08 0-.145-.065-.145-.145zm76.454-61.309h62.546v61.454h-62.546z" /></g></svg>
                            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                    </div>
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>

        </>
    );
};

export default PostDetail;