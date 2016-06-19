package ee.mtiitson.gradeio;

import ee.mtiitson.gradeio.model.Student;
import ee.mtiitson.gradeio.model.Teacher;
import ee.mtiitson.gradeio.model.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.http.MediaType;

@Configuration
class RestConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Teacher.class, Student.class, User.class);
        super.configureRepositoryRestConfiguration(config);
    }
}


