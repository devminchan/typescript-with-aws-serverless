console.log('Loading function');

exports.handler = async (event, context) => {
  console.log('Received event: ' + JSON.stringify(event, null, 2));
  // console.log('value1=', event.key1);
  // console.log('value1=', event.key2);
  // console.log('value1=', event.key3);

  return event.key2;
  // throw new Error('Something went wrong');
};