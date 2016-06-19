package ee.mtiitson.gradeio.repository;

import ee.mtiitson.gradeio.model.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
public interface StudentRepository extends PagingAndSortingRepository<Student, String> {

}
