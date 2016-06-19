package ee.mtiitson.gradeio.repository;

import ee.mtiitson.gradeio.model.Student;
import ee.mtiitson.gradeio.model.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

public interface TeacherRepository extends PagingAndSortingRepository<Teacher, String> {
}
