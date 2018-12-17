import controllers from '../controllers';

export default (app) => {
    // attach each controller to app
    controllers.forEach(controller => controller(app));
};
