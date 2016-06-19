package ee.mtiitson.gradeio.jackson;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import ee.mtiitson.gradeio.model.Student;
import ee.mtiitson.gradeio.repository.StudentRepository;
import ee.mtiitson.gradeio.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class LabAuthorsDeserializer extends JsonDeserializer {
    private static final ObjectMapper mapper = new ObjectMapper();

    private static final CollectionType collectionType =
            TypeFactory
                    .defaultInstance()
                    .constructCollectionType(Set.class, String.class);

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        ObjectNode objectNode = p.getCodec().readTree(p);
        JsonNode nodeAuthors = objectNode.get("authors");
        if (null == nodeAuthors                     // if no author node could be found
                || !nodeAuthors.isArray()           // or author node is not an array
                || !nodeAuthors.elements().hasNext())   // or author node doesn't contain any authors
            return null;
        Set<String> names = mapper.readerFor(collectionType).readValue(nodeAuthors);
        Set<Student> result = new HashSet<>();
        for (String name : names) {
            result.add(studentRepository.findOne(name));
        }

        return null;
    }
}
