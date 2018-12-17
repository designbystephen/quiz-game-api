import ErrorResponse from '../classes/ErrorResponse';

export const internalServerError = new ErrorResponse({ 
    status: 500,
    displayText: "Oops! There was an unexpected error!",
    details: "Unhandled error during request"
});

export const notFound = new ErrorResponse({
    status: 404,
    displayText: "Oops! Unable to find resource!",
    details: "Resource not found at the given path"
})

export const invalidRequest = new ErrorResponse({
    status: 400,
    displayText: "Oops! Missing parameters!",
    details: "Missing required parameters to complete this request"
});
