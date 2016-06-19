package ee.mtiitson.gradeio.repository;

import ee.mtiitson.gradeio.model.Grade;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(exported = false)
public interface GradeRepository extends CrudRepository<Grade, Long>{
}
